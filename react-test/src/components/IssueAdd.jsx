import React from "react";

const issues = [
    {
        id: 1,
        status: "New",
        issueText: "This is the issue text"
    }
]

class IssueAdd extends React.Component {
    render() {
        return (
            <div>
                <h3>This is list issue section</h3>
            </div>
        )
    }
}

export class AddIssue extends React.Component {
    render() {
        return (
            <h3>This is addissue section</h3>
        );
    }
}

export class Table extends React.Component {
    render() {
        return (
            <table style={{ borderCollapse: "collapse", border: "1px solid black", padding: '6px' }}>
                <tr>
                    <th>This is header 1</th>
                    <th>This is header 2</th>
                </tr>
                <tr>
                    <td>Thiis is data 1</td>
                    <td>Thiis is data 2</td>
                </tr>
            </table>);
    }
}




export default IssueAdd;
