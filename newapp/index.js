const mongoose = require("mongoose");

// ─── 1. Connect to MongoDB ───────────────────────────────────────────────────
mongoose
  .connect("mongodb://127.0.0.1:27017/newappDB")
  .then(() => console.log("✅ Connected to MongoDB — Database: newappDB"))
  .catch((err) => console.error("❌ Connection failed:", err));

// ─── 2. Define a Schema ───────────────────────────────────────────────────────
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ─── 3. Create a Model ────────────────────────────────────────────────────────
const User = mongoose.model("User", userSchema);

// ─── 4. Insert Sample Data ────────────────────────────────────────────────────
async function insertUsers() {
  try {
    const users = [
      { name: "Alice", email: "alice@example.com", age: 25 },
      { name: "Bob", email: "bob@example.com", age: 30 },
      { name: "Charlie", email: "charlie@example.com", age: 22 },
    ];

    await User.insertMany(users);
    console.log("✅ Sample users inserted!");
  } catch (err) {
    if (err.code === 11000) {
      console.log("ℹ️  Users already exist, skipping insert.");
    } else {
      console.error("❌ Insert error:", err.message);
    }
  }
}

// ─── 5. Read All Users ────────────────────────────────────────────────────────
async function getAllUsers() {
  try {
    const users = await User.find();
    console.log("\n📋 All Users in Database:");
    users.forEach((user) => {
      console.log(`  - ${user.name} | ${user.email} | Age: ${user.age}`);
    });
  } catch (err) {
    console.error("❌ Read error:", err.message);
  }
}

// ─── 6. Run Everything ────────────────────────────────────────────────────────
async function main() {
  await insertUsers();
  await getAllUsers();

  // Close the connection after operations
  await mongoose.connection.close();
  console.log("\n🔌 Connection closed.");
}

// Wait for connection to be ready, then run main
mongoose.connection.once("open", () => {
  main();
});

