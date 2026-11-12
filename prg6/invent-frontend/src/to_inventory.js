
import React, { useState, useEffect } from "react";
import axios from "axios";

// Component 1: Display Inventory
function Display_Inventory() {
    const [inventory, setInventory] = useState([]);

    // Fetch inventory from backend
    const loadData = async () => {
        const response = await axios.get("http://localhost:8000");
        setInventory(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h1>Inventory Management</h1>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {inventory.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.prodname}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <AddInventory refresh={loadData} />
        </div>
    );
}

// Component 2: Add Inventory
function AddInventory({ refresh }) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    const SubmitEvent = async (e) => {
        e.preventDefault();

        const data = {
            id: id,
            prodname: name,
            qty: qty,
            price: price
        };

        // Send data to backend
        await axios.post("http://localhost:8000/add", data);

        alert("Product Added");

        // Reload inventory
        refresh();

        // Clear form
        setId(0);
        setName("");
        setQty(0);
        setPrice(0);
    };

    return (
        <div>
            <h1>Inventory Management 1</h1>

            <form onSubmit={SubmitEvent}>
                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input
                                    type="number"
                                    value={id}
                                    onChange={(e) => setId(Number(e.target.value))}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Product Name</td>
                            <td>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Quantity</td>
                            <td>
                                <input
                                    type="number"
                                    value={qty}
                                    onChange={(e) => setQty(Number(e.target.value))}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Price</td>
                            <td>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export { Display_Inventory, AddInventory };
