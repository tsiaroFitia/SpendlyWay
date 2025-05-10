import { supabase } from "./supabase";

export const TransactionService = {
  // Ajouter une transaction
  async addTransaction({
    amount,
    description,
    date,
    category_id,
    source_id,
    type,
  }) {
    const { data, error } = await supabase
      .from("transactions")
      .insert([
        {
          amount,
          description,
          date,
          category_id,
          source_id,
          type,
        },
      ])
      .select();

    if (error) throw error;
    return data[0];
  },

  // Récupérer les transactions du mois
  async getMonthlyTransactions(year, month) {
    const { data, error } = await supabase
      .from("transactions")
      .select(
        `
        *,
        category:category_id(name, icon),
        source:source_id(name, icon)
      `
      )
      .gte("date", `${year}-${month}-01`)
      .lte("date", `${year}-${month}-31`);

    if (error) throw error;
    return data;
  },

  // Statistiques mensuelles
  async getMonthlySummary(year, month) {
    const { data, error } = await supabase
      .from("transactions")
      .select("type, amount")
      .gte("date", `${year}-${month}-01`)
      .lte("date", `${year}-${month}-31`);

    if (error) throw error;

    return data.reduce((acc, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + curr.amount;
      return acc;
    }, {});
  },
};
