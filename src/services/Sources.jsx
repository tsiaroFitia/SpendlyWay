import { supabase } from "./supabase";

export const SourceService = {
  async getUserSources(userId) {
    const { data, error } = await supabase
      .from("sources")
      .select("*")
      .eq("user_id", userId); // Adaptez selon votre schéma

    if (error) throw error;
    return data;
  },

  async createSource(sourceData) {
    const { data, error } = await supabase
      .from("sources")
      .insert([sourceData])
      .select();

    if (error) throw error;
    return data[0];
  },
};
