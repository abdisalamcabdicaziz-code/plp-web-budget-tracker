# Personal Budget Tracker - Week 2 Assignment

This project builds directly on top of the Week 1 static skeleton, expanding the Personal Budget & Expense Tracker with structured tables, upgradeable forms, multimedia elements, and advanced CSS styling.

## What Was Built & Features Added:
1. **Expense Table:** Replaced the placeholder text with a structured HTML table (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`) containing 5 rows of hardcoded sample data. Styled with collapsed borders, padding, colored headers, and alternating row background colors.
2. **Upgraded Form:** Wrapped inputs inside a `<form>`, replaced the category text input with a `<select>` dropdown (Food, Transport, Rent, Entertainment, Other), added a button type="button", and assigned matching IDs (`id="expense-name"`, `id="expense-amount"`, `id="expense-category"`) for future JavaScript integration.
3. **Multimedia Content:** Added an `<img>` logo in the header and embedded a YouTube video tutorial using an `<iframe>`.
4. **Interactive Elements:** Added collapsible instructions using `<details>` and `<summary>`, added table row hover effects, and styled buttons with `cursor: pointer`.
5. **Advanced CSS Selectors:** Applied descendant selectors (`.expense-table th`), direct child selectors (`.input-group > input`), position pseudo-classes (`tr:nth-child(even)`), and focus states (`input:focus`).
