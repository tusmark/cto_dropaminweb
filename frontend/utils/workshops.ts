import workshopsData from '../workshops.json';

export interface Workshop {
  id: number;
  city: string;
  date: string;
  time: string;
  location: string;
  price: number;
  capacity: number;
  available_spots: number;
  is_sold_out: boolean;
}

export const getWorkshops = (): Workshop[] => {
  return workshopsData;
};

export const getWorkshopById = (id: number): Workshop | undefined => {
  return workshopsData.find(workshop => workshop.id === id);
};
