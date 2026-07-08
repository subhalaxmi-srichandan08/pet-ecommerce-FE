import "./PasswordChecklist.css";

function PasswordChecklist({ password }) {
    const checks = [
        {
            label: "At least 8 characters",
            valid: password.length >= 8,
        },
        {
            label: "One uppercase letter",
            valid: /[A-Z]/.test(password),
        },
        {
            label: "One lowercase letter",
            valid: /[a-z]/.test(password),
        },
        {
            label: "One number",
            valid: /[0-9]/.test(password),
        },
        {
            label: "One special character",
            valid: /[^A-Za-z0-9]/.test(password),
        },
    ];

    const strength = checks.filter(item => item.valid).length;

    const getStrengthText = () => {
        switch (strength) {
            case 0:
            case 1:
                return "Weak Password";
            case 2:
                return "Fair Password";
            case 3:
                return "Good Password";
            case 4:
                return "Strong Password";
            case 5:
                return "Excellent Password";
            default:
                return "";
        }
    };

    const getStrengthClass = () => {
        switch (strength) {
            case 0:
            case 1:
                return "weak";
            case 2:
                return "fair";
            case 3:
                return "good";
            case 4:
                return "strong";
            case 5:
                return "excellent";
            default:
                return "";
        }
    };

    return (
        <div className="password-checklist">

            <div className="strength-text">
                Password Strength:
                <span className={getStrengthClass()}>
                    {" "}
                    {getStrengthText()}
                </span>
            </div>

            {checks.map((item) => (
                <div
                    key={item.label}
                    className={item.valid ? "valid" : "invalid"}
                >
                    <span className="icon">
                        {item.valid ? "✔" : "✖"}
                    </span>

                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
}

export default PasswordChecklist;