// ===== INSCRIPTION =====
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;

        if (password !== confirm) {
            alert("Les mots de passe ne correspondent pas ❌");
            return;
        }

        const user = {
            username,
            email,
            password
        };

        localStorage.setItem("manganimeUser", JSON.stringify(user));
        alert("Compte créé avec succès ✅");

        window.location.href = "login.html";
    });
}

// ===== CONNEXION =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const storedUser = JSON.parse(localStorage.getItem("manganimeUser"));

        if (!storedUser) {
            alert("Aucun compte trouvé ❌");
            return;
        }

        if (
            email === storedUser.email &&
            password === storedUser.password
        ) {
            alert("Connexion réussie 🔥 Bienvenue " + storedUser.username);
            window.location.href = "index.html";
        } else {
            alert("Email ou mot de passe incorrect ❌");
        }
    });
}
// ===== AFFICHAGE UTILISATEUR CONNECTÉ =====
const user = JSON.parse(localStorage.getItem("manganimeUser"));

const welcomeUser = document.getElementById("welcomeUser");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const logoutBtn = document.getElementById("logoutBtn");

if (user && welcomeUser) {
    welcomeUser.textContent = "Bienvenue, " + user.username;
    welcomeUser.style.color = "#8e2de2";
    welcomeUser.style.marginLeft = "20px";

    if (loginLink) loginLink.style.display = "none";
    if (registerLink) registerLink.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline";
}

// ===== DÉCONNEXION =====
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("manganimeUser");
        alert("Déconnecté ✅");
        window.location.href = "index.html";
    });
}
