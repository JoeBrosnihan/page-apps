# Cursor Rules

This directory contains modular rule files that guide AI behavior in this project.

## Structure

Each `.mdc` (Markdown+Context) file defines a specific set of rules or guidelines.

## Rule File Format

```mdc
---
description: "Brief description of what this rule does"
globs: ["**/*.js", "**/*.ts"]  # File patterns this rule applies to
alwaysApply: true              # Whether to always apply this rule
---

# Rule Content
Your rules and guidelines here in Markdown format...
```

## Metadata Properties

- **description**: Brief overview of the rule's purpose
- **globs**: Array of file patterns (glob syntax) where the rule applies
- **alwaysApply**: Boolean - if true, rule is always enforced for matching files

## Current Rules

- **ui-design-principles.mdc**: Mobile-first, space-efficient, functional UI design (icons over text, minimal visual noise)
- **coding-standards.mdc**: General coding standards and best practices

## Adding New Rules

1. Create a new `.mdc` file in this directory
2. Add appropriate frontmatter metadata
3. Write your guidelines in clear Markdown
4. Commit to version control so the team shares the same rules

## Version Control

✅ This directory should be committed to Git
✅ Team members will automatically get the same rules
✅ Rules can be discussed and improved via pull requests

