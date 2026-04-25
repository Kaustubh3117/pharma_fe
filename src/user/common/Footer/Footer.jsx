import { footerSections, footerLinks, socialLinks } from "./footerHelper";

export const Footer = () => {
    return (
        <>
            <footer style={{ backgroundColor: "#f9f9f9", color: "#000", padding: "40px 20px 20px", marginTop: "25px" }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "30px"
                }}>
                    {footerSections.map((section, index) => (
                        <div key={index} style={{ marginBottom: "20px" }}>
                            <h3 style={{
                                color: "#4770d6",
                                marginBottom: "15px",
                                fontSize: "1.2rem",
                                fontWeight: "600",
                                borderBottom: "2px solid #4770d6",
                                paddingBottom: "8px"
                            }}>
                                {section.title}
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} style={{
                                        marginBottom: "8px",
                                        padding: "4px 0",
                                        borderBottom: "1px solid rgba(255,255,255,0.1)"
                                    }}>
                                        <button
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "#000",
                                                fontSize: "0.95rem",
                                                display: "flex",
                                                alignItems: "center",
                                                cursor: "pointer",
                                                width: "100%",
                                                textAlign: "left"
                                            }}
                                            onClick={() => console.log(`Clicked: ${item}`)}
                                        >
                                            <span style={{
                                                display: "inline-block",
                                                width: "6px",
                                                height: "6px",
                                                backgroundColor: "#4770d6",
                                                borderRadius: "50%",
                                                marginRight: "10px"
                                            }}></span>
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
            <footer style={{ backgroundColor: "#1a1a1a", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", textAlign: "center" }}>
                <p style={{ margin: 0, color: "#fff", fontSize: "0.9rem" }}>
                    © 2026 PharmaCare. All rights reserved.
                    {footerLinks.map((link, idx) => (
                        <span key={idx} style={{ margin: "0 10px", cursor: "pointer" }} onClick={link.onClick}>
                            | &nbsp; {link.label}
                        </span>
                    ))}
                </p>
                <div style={{ marginTop: "15px", display: "flex", justifyContent: "center", gap: "15px" }}>
                    {socialLinks.map((social, idx) => (
                        <button
                            key={idx}
                            style={{
                                background: "none",
                                border: "none",
                                color: "#4CAF50",
                                fontSize: "1.2rem",
                                cursor: "pointer",
                                padding: "5px"
                            }}
                            onClick={social.onClick}
                            aria-label={social.label}
                        >
                            {social.icon}
                        </button>
                    ))}
                </div>
            </footer>
        </>

    );
};
