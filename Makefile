.PHONY : dev

dev:
	cargo tauri dev

build:
	cargo tauri build

.DEFAULT_GOAL := dev