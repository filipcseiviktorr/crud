import { defineStore } from "pinia";
import axios from "axios";
import { CarBrand } from "../types/CarBrand";

export const useCarBrandStore = defineStore("carBrandStore", {
    state: () => ({
        brands: [] as CarBrand[],
    }),
    actions: {
        async fetchCarBrands() {
            try {
                const response = await axios.get<{ data: CarBrand[] }>("/api/v1/car-brands");
                this.brands = response.data.data;
            } catch (error) {
                throw error;
            }
        },
        async addBrand(name: string) {
            try {
                const response = await axios.post<{ data: CarBrand }>(`/api/v1/car-brands`, { name });
                return response.data.data;
            } catch (error) {
                throw error;
            }
        },
        async editBrand(id: number, name: string) {
            try {
                const response = await axios.put(`/api/v1/car-brands/${id}`, { name });
                return response.data.data;
            } catch (error) {
                throw error;
            }
        },
        async deleteBrand(id: number) {
            try {
                await axios.delete(`/api/v1/car-brands/${id}`);
            } catch (error) {
                throw error;
            }
        }
    }
});
