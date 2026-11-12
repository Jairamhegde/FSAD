import React from "react";

function Headers() {
    return (
        <div style={{ background: '#c2c2c2', padding: 5 }}>
            <h2>Jairam Hegde</h2>
            <div style={{ display: "flex", gap: 5 }}>
                <h4>abc@gmail.com</h4>
                <p>|</p>
                <h4>GitHub</h4>
            </div>
        </div>
    );
}



class Resume extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <Headers />
                </section>
                <section>
                    <h3>Summary</h3>
                    <p>MY name is jairam hegde, an MCA student from rvce. and this is my summary section</p>
                </section>
                <section>
                    <h3>Skills</h3>
                    <ul>
                        <li>Python,java,javaScript,HTML,CSS</li>
                        <li>React, FastAPI</li>
                        <li>Git/GitHub, CI/CD</li>
                    </ul>
                </section>

                <section>
                    <h3>Projects</h3>
                    <h3>Project 1</h3>
                    <ul>
                        <li>This is the first bullet point</li>
                        <li>This is second bullet point</li>
                    </ul>
                </section>
                <section>

                    <h3>Project 2</h3>
                    <ul>
                        <li>This is the first bullet point, that contains details about my project</li>
                        <li>This is second bullet poin</li>
                    </ul>
                </section>
                <table style={{ borderCollapse: "collapse", width: '100%' }}>
                    <tr>
                        <th style={{ border: '1px solid black' }}>Certificates</th>
                        <th style={{ border: '1px solid black' }}>Language</th>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black' }}>CIRT 1</th>
                        <th style={{ border: '1px solid black' }}>Hindi</th>
                    </tr>
                </table>

            </div>);
    }
}

export default Resume;