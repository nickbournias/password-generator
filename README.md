# Password Generator

A simple, client-side **password generator** built with vanilla JavaScript.

Users can generate secure passwords by selecting character types and adjusting length, with real-time strength evaluation and one-click copy functionality.

---

## 🔐 Features

- Adjustable password length
- Toggle character sets:
  - Letters (uppercase + lowercase)
  - Numbers
  - Symbols
- Real-time password strength indicator
- One-click copy to clipboard
- Fully client-side (no data sent anywhere)

---

## ⚙️ How It Works

### Password Generation
- Builds a character pool based on user selections
- Randomly selects characters until the desired length is reached
- Updates the display instantly

### Strength Evaluation
Password strength is calculated based on:
- Length thresholds (8 / 12 / 16+ characters)
- Presence of:
  - Letters
  - Numbers
  - Symbols

The strength is categorized as:
- Very Weak
- Weak
- Medium
- Strong
- Very Strong

Color-coded feedback helps users quickly assess security.

---

## 🧠 Technologies Used

- **HTML** — UI elements and structure
- **CSS** — Layout, toggles, and visual feedback
- **Vanilla JavaScript**
  - DOM manipulation
  - Randomized password generation
  - Clipboard API for copying
  - Regex-based strength evaluation

No frameworks. No libraries.

---

## 📂 Project Structure

