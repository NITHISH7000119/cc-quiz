// Import Supabase client
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔑 Replace with your Supabase details
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_KEY = "YOUR_ANON_KEY";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // uses your existing form
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get values from your existing input fields
    const name = form.querySelector("input[name='name']").value.trim();
    const college = form.querySelector("input[name='college']").value.trim();

    if (!name || !college) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // Save to Supabase
    const { error } = await supabase.from("students").insert([{ name, college }]);

    if (error) {
      alert("❌ Error: " + error.message);
    } else {
      alert("✅ Data saved successfully!");
      form.reset();
    }
  });
});
