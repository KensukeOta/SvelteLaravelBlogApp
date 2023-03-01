// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: import("$lib/types/User").User;
		}
		interface PageData {
			user: import("$lib/types/User").User;
		}
		// interface Platform {}
	}
}

export {};