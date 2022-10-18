import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://wixfwihccukzcyquuexo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeGZ3aWhjY3VremN5cXV1ZXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwOTk5NTIsImV4cCI6MTk4MTY3NTk1Mn0.hGDhj0N1Z12lYc5pgt3nkriS_6dW820rarPWZSSDNLQ"
);

const signUpUser = async () => {
  try {
    console.log("masuk");
    let { user, error } = await supabase.auth.signUp({
      email: "lololo@mail.com",
      password: "12345678",
    });

    console.log({ user }, { error });
  } catch (error) {
    console.log(error);
  }
};

const addData = async () => {
  try {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    console.log({ name }, { phone }, { email }, { message });

    const { data, error } = await supabase
      .from("customer_info")
      .insert([{ some_column: "someValue", other_column: "otherValue" }]);
  } catch (error) {
    console.log(error);
  }
};
