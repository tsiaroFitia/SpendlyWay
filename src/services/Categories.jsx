import { supabase } from "./supabase";

export const CategoryService = {
  // Récupérer toutes les catégories
  async getAllCategories() {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
    return data;
  },

  // Récupérer une catégorie par ID
  async getCategoryById(id) {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
    return data;
  },

  // Créer une nouvelle catégorie
  async createCategory({ name, icon }) {
    const { data, error } = await supabase
      .from("categories")
      .insert([{ name, icon }])
      .select();

    if (error) {
      console.error("Error creating category:", error);
      throw error;
    }
    return data[0];
  },

  // Mettre à jour une catégorie
  async updateCategory(id, { name, icon }) {
    const { data, error } = await supabase
      .from("categories")
      .update({ name, icon })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Error updating category:", error);
      throw error;
    }
    return data[0];
  },

  // Supprimer une catégorie
  async deleteCategory(id) {
    const { error } = await supabase.from("categories").delete().eq("id", id);

    if (error) {
      console.error("Error deleting category:", error);
      throw error;
    }
    return true;
  },

  // Récupérer les catégories par type (income/expense)
  async getCategoriesByType(type) {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("type", type); // Si vous avez un champ type dans votre table

    if (error) {
      console.error("Error fetching categories by type:", error);
      throw error;
    }
    return data;
  },

  // Recherche de catégories
  async searchCategories(searchTerm) {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .ilike("name", `%${searchTerm}%`);

    if (error) {
      console.error("Error searching categories:", error);
      throw error;
    }
    return data;
  },
};
