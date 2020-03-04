import _posts from "./posts";
import { writable } from "svelte/store";

function createPostStore() {
  const { subscribe, set, update } = writable(_posts);

  return {
    subscribe,
    increment: (post) => {
      update(n => n.filter(item => item === post)[0].likes += 1)
    },
    decrement: () => {
      update(n => n - 1)
    }
  }
}

export const posts = createPostStore()