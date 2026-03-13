This message means **Windows cannot find Python in your system PATH**, even though Python is installed.

You actually proved Python *is installed* earlier because you launched it using the full path:

```
C:/Users/mukuw/AppData/Local/Programs/Python/Python313/python.exe
```

So the problem is **PATH configuration**, not installation.

---

## ✅ Fix (Best Method — Add Python to PATH)

### Step 1 — Find your Python install folder

Yours is already visible:

```
C:\Users\mukuw\AppData\Local\Programs\Python\Python313\
```

You also need the Scripts folder:

```
C:\Users\mukuw\AppData\Local\Programs\Python\Python313\Scripts\
```

---

### Step 2 — Open Environment Variables

1. Press **Windows key**
2. Search:

```
Edit the system environment variables
```

3. Click **Environment Variables**

---

### Step 3 — Edit PATH

Under **User variables**:

1. Select **Path**
2. Click **Edit**
3. Click **New**
4. Add BOTH of these:

```
C:\Users\mukuw\AppData\Local\Programs\Python\Python313\
```

```
C:\Users\mukuw\AppData\Local\Programs\Python\Python313\Scripts\
```

5. Press **OK** on everything.

---

### Step 4 — Restart Terminal

Close PowerShell completely and reopen it.

Then test:

```powershell
python --version
```

You should now see:

```
Python 3.13.1
```

---

## ✅ Optional (Recommended for VS Code users)

Also test:

```powershell
pip --version
```

If that works, package installs will work normally.

---

## Why this happened (simple explanation)

Windows looks for programs using a list called **PATH**.

Right now:

```
Terminal → looks for python → cannot find it
```

After fixing PATH:

```
Terminal → finds python.exe automatically ✅
```

---

If you want, I can also show you a **30-second VS Code setup** that prevents 90% of Python beginner issues (interpreter + terminal auto-sync).
