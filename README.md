# 🚀 Dynamic API Sorter (Chrome Extension)

A simple and powerful Chrome extension that helps you **quickly sort and prioritize API responses or raw text directly in your browser**.

This tool is especially useful for developers, testers, and security researchers who deal with large API outputs, logs, or raw text data.

---

## ✨ Features

* 🔍 **Search & Highlight Priority Lines**

  * Enter any keyword (e.g., `error`, `token`, `?`, `id`)
  * Matching lines are automatically moved to the top

* ⚡ **Instant Execution**

  * Works directly on the current active tab
  * No page reload required

* 🔠 **Case-Insensitive Matching**

  * Finds matches regardless of uppercase/lowercase

* 📄 **Clean Output Format**

  * Displays sorted results in a readable monospace format

---

## 🧠 Why I Built This

While working with tools like **Web Archive (Wayback Machine)**, especially endpoints like:

```
https://web.archive.org/cdx/search/cdx?url=api.netflix.com%2F*&output=text&fl=original&collapse=urlkey&from
```

You often get **hundreds or thousands of API endpoints** in plain text.

Finding a **specific endpoint, keyword, or sensitive pattern** in that huge list becomes time-consuming and frustrating.

👉 Manually scrolling = inefficient
👉 Browser search (Ctrl + F) = limited visibility

So I built this tool to:

* Instantly **bring relevant endpoints to the top**
* Help in **faster recon during bug bounty / pentesting**
* Reduce time spent searching through noisy data

---

## 🛠️ How It Works

1. The extension reads all visible text from the current webpage.
2. Splits the content into individual lines.
3. Filters lines into:

   * ✅ Matching lines (contain the search term)
   * ❌ Non-matching lines
4. Rewrites the page content:

   * Matches appear at the top
   * Others follow below

---

## 📦 Installation

### Load Unpacked Extension (Developer Mode)

1. Download or clone this repository:

   ```bash
   git clone https://github.com/kirubakaran2/API-SORTER.git
   ```

2. Open Chrome and go to:

   ```
   chrome://extensions/
   ```

3. Enable **Developer Mode** (top right)

4. Click **Load Unpacked**

5. Select the project folder

---

## 🚀 Usage

1. Open any webpage containing raw text / API response
   *(e.g., Web Archive API endpoint listings)*

2. Click on the extension icon

3. Enter a search term:

   * `login`
   * `auth`
   * `v1`
   * `admin`
   * `token`

4. Click **"Sort to Top"**

5. 🎯 Instantly see relevant endpoints at the top

---

## 📁 Project Structure

```
├── manifest.json     # Extension configuration (Manifest V3)
├── popup.html        # UI for user input
├── popup.js          # Logic for sorting and injecting script
```

---

## 🔐 Permissions Used

* `activeTab` → Access current tab content
* `scripting` → Inject sorting logic into the page

---

## ⚠️ Limitations

* Works best on **plain text / API response pages**
* May not function correctly on highly dynamic or script-heavy websites
* Replaces the entire page content temporarily

---

## 💡 Use Cases

* API endpoint discovery (Recon)
* Bug bounty hunting
* Log analysis
* Filtering sensitive keywords (tokens, errors, secrets)
* CTF challenges
* Wayback Machine data analysis

---

## 🧠 Future Improvements

* Highlight matches instead of just sorting
* Add regex support
* Export filtered results
* Toggle original view
* Dark mode UI

---

## 👨‍💻 Author

**K1ru4a**

* GitHub: https://github.com/kirubakaran2

---

## 📜 License

This project is open-source and available under the MIT License.

---

⭐ If you found this useful, consider giving it a star!
