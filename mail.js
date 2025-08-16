import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔑 Replace with your Supabase credentials
const SUPABASE_URL = "https://oarbjhjeampesttjhorq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hcmJqaGplYW1wZXN0dGpob3JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMTQ0OTIsImV4cCI6MjA3MDg5MDQ5Mn0.3VbKBEXZ29R6U8jbNqg6hXVc6--4qgWoFcEA69iHc04";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value.trim();
    const department = form.querySelector("input[name='department']").value.trim();
    const department_number = form.querySelector("input[name='department_number']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();

    if (!name || !department || !department_number || !email) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const { error } = await supabase
      .from("students")
      .insert([{ name, department, department_number, email }]);

    if (error) {
      alert("❌ Error: " + error.message);
    } else {
      alert("✅ Data saved successfully!");
      form.reset();
    }
  });
});

