import { writable } from "svelte/store";
import type { Activity } from "../types/data.types";

export interface ActivitiesState {
  activities: Activity[] | null;
  loading: boolean;
  error: boolean;
}

const createActivities = () => {
  const store = writable<ActivitiesState>();
  const { subscribe, set } = store;

  const getActivities = async () => {
    set({
      activities: null,
      loading: true,
      error: false,
    });

    try {
      const url =
        "https://dtnl-frontend-internship-case.vercel.app/api/get-activities";
      const response = await fetch(url);
      const data = await response.json();
      set({
        activities: data.activities,
        loading: false,
        error: false,
      });
    } catch (error) {
      set({
        activities: null,
        loading: false,
        error: true,
      });
    }
  };

  getActivities();

  return {
    getActivities,
    subscribe,
    set,
  };
};

export const activitiesService = createActivities();
