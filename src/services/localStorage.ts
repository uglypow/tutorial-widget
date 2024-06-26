import { STORAGE_NAME } from "@/configs/localStorageConfig";

enum TutorialState {
  IN_PROGRESS = "in_progress",
  DONE = "done",
}

interface ILocalStorage {
  userTutorrials: { [userId: string]: { [tutorialId: string]: TutorialState } };
}

class LocalStorageService {
  public initUserTutorialStorage() {
    const storage = this.getAll();

    if (!storage.userTutorrials) {
      storage.userTutorrials = {};
    }

    if (!storage.userTutorrials[this.options.userId]) {
      storage.userTutorrials[this.options.userId] = {};
    }

    this.setAll(storage);
  }

  private hasStorage() {
    return localStorage.getItem(STORAGE_NAME) !== null;
  }

  getAll(): ILocalStorage {
    return JSON.parse(localStorage.getItem(STORAGE_NAME) || "{}");
  }

  get<K extends keyof ILocalStorage>(item: K): ILocalStorage[K] {
    const storage = this.getAll();
    return storage[item];
  }

  setAll(value: ILocalStorage) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(value));
  }

  set<K extends keyof ILocalStorage>(item: K, value: ILocalStorage[K]): void {
    const storage = {
      ...this.getAll(),
      [item]: value,
    };
    this.setAll(storage);
  }

  public getUserTutorials() {
    const storage = this.getAll();
    return storage.userTutorrials[this.options.userId];
  }

  public isTutorialDone(tutorialId: string) {
    if (!this.options.storage) return;

    return (
      this.hasStorage() &&
      this.getUserTutorials()[tutorialId] === TutorialState.DONE
    );
  }

  public setCloseTutorial(tutorialId: string) {
    if (!this.options.storage) return;

    const storage = this.getAll();
    storage.userTutorrials[this.options.userId][tutorialId] =
      TutorialState.DONE;

    this.setAll(storage);
  }

  get options() {
    return window.ncPortalTutorial.options;
  }
}

const localStorageService = new LocalStorageService();
export default localStorageService;
