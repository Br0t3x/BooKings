#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use mysql::*;
use prelude::Queryable;

#[tauri::command]
fn is_logged() -> bool {
  false
}

#[tauri::command]
fn check_credentials(email: String, password: String) -> bool {
  println!("E-mail: {};\nSenha: {}", email, password);
  true
}

fn main() {
    let url: &str = "mysql://root:Vai se ferrar@localhost:3306/bookings";

    let pool = Pool::new(url).unwrap();
    let connection = pool.get_conn().unwrap();

    let app = tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![is_logged, check_credentials])
        .build(tauri::generate_context!())
        .expect("Error while building tauri app");

    app.run(|_x, _y| {});
}
