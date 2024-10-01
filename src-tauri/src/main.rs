#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn is_logged() -> bool {
  false
}

#[tauri::command]
fn check_credentials(email: String, password: String)-> bool {
  println!("E-mail: {};\nSenha: {}", email, password);
  true
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
          is_logged,
          check_credentials,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
