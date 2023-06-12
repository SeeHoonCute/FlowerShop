
import { useEffect, useState } from 'react';
// import axios from 'axios';
import {axios} from "../../api/axios/axios-config";

export interface Product {
    productId: string;
    shopId: string;
    mainImage: string;
    productName: string;
    productDescription: string;
    quantity: number;
    status: string;
    Price: number;
  }

  export interface Rating {
    ratingId: string;
    userId: string;
    productId: string;
    review: string;
    ratingValue: number;
    createdAt: string;
  }

export  interface ProductCardProps {
    // id: string,
    image: string;
    link: string;
    name: string;
    price: {
      present: number;
      original?: number;
    };
    shopType: string;
    address: string;
    rating: {
      rate: number;
      rateCount: number;
    };
    soldCount: number;
  };



  export async function getProductData(page: number, size: number) {
    try {
      const response = await axios.get(`/products?page=${page}&size=${size}`);
      return response.data;
    } catch (error) {
      console.error('Error retrieving product data:', error);
      return null;
    }
  }

  export async function getRatingData(productId:string) {
    try {
      const response = await axios.get(`/ratings/product/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error retrieving rating data:', error);
      return null;
    }
  }
