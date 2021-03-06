import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

//環境変数を呼び出す
dotenv.config();

//.envの変数を取得
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);





export const findAll = async () => {
  try {
    const { data, error } = await supabase
      .from("todo_table")
      .select()
      .order("deadline", { ascending: true })
      .order("todo", { ascending: true });
    return data;
  } catch (e) {
    throw Error("Error while getting Todo Data");
  }
};




export const findToday = async () => {
  try {
    const { data, error } = await supabase
      .from("todo_table")
      .select()
      .lte("deadline", new Date().toISOString())
      .order("deadline", { ascending: true })
      .order("todo", { ascending: true });
    return data;
  } catch (e) {
    throw Error("Error while getting Todo Data");
  }
};





export const store = async ({ params }) => {
  console.log(params);
  try {
    const { data, error } = await supabase.from("todo_table").insert([
      {
        ...params,
        is_done: false,
      },
    ]);
    return data;
  } catch (e) {
    throw Error("Error while store Todo Data");
  }
};