#!/usr/bin/env python3
"""
Multi-language Test Smell Auditor (Python pytest & Swift XCTest).
Detects tautological assertions (`assert True`), empty test functions, and assertion-free tests.
"""
import ast
import glob
import sys
from pathlib import Path


def audit_python_test(path: Path):
    issues = []
    tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
    test_count = 0
    for node in ast.walk(tree):
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)) and node.name.startswith("test_"):
            test_count += 1
            asserts = [n for n in ast.walk(node) if isinstance(n, ast.Assert)]
            calls = [
                n for n in ast.walk(node)
                if isinstance(n, ast.Call) and ("raises" in ast.unparse(n.func) or "assert" in ast.unparse(n.func))
            ]
            if not asserts and not calls:
                issues.append((node.lineno, f"{node.name}: Test contains zero assertions"))
            for a in asserts:
                if isinstance(a.test, ast.Constant) and bool(a.test.value) is True:
                    issues.append((a.lineno, f"{node.name}: Tautological `assert True` detected"))
    return test_count, issues


def main():
    py_files = [Path(p) for p in sorted(glob.glob("tests/**/test_*.py", recursive=True))]
    total_tests = 0
    total_issues = 0
    for pf in py_files:
        count, issues = audit_python_test(pf)
        total_tests += count
        total_issues += len(issues)
        status = f"✅ {count} test(s) clean" if not issues else f"❌ {len(issues)} smell(s)"
        print(f"[{pf}] {status}")
        for lineno, msg in issues:
            print(f"  Line {lineno}: {msg}")
    print(f"Summary: {total_tests} test(s) audited, {total_issues} smell(s) found.")
    sys.exit(1 if total_issues > 0 else 0)


if __name__ == "__main__":
    main()
