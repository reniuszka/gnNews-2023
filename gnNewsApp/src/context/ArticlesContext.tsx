import { createContext, useState, useEffect, ReactNode } from "react";
import { countriesList } from "../data/countriesList";


export type NewArticleType = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id?: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};
export type NewsType = {
  articles: NewArticleType[] | [];
  status: string;
  totalResults: number;
};

export type ArticleContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  countries: string[];
  news: NewsType;
  setNews: React.Dispatch<React.SetStateAction<NewsType>>;
};

export type ChildrenType = {
  children: ReactNode;
};

export const initialState: ArticleContextType = {
  isLoading: false,
  setIsLoading: (isLoading) => !isLoading,
  countries: countriesList,
  news: { status: "", articles: [], totalResults: 0 },
  setNews: ({}) => {},
};
export const ArticlesContext = createContext<ArticleContextType>(initialState);

export const ArticlesContextProvider = ({ children }: ChildrenType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<string[]>(countriesList);
  const [news, setNews] = useState<NewsType>({
    status: "",
    articles: [],
    totalResults: 0,
  });

  useEffect(() => {
    const fetchNews = async (): Promise<NewsType | undefined> => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_NEWSAPI_LINK
          }/top-headlines?country=us&apiKey=${
            import.meta.env.VITE_REACT_API_KEY
          }`
        );
        const data = await response.json();
        setIsLoading(false);
        setNews(data);
        return data;
      } catch (error) {
        if (error instanceof Error) {
          setIsLoading(false);
          console.log(error.message);
          throw new Error("sth went wrong to fetch data");
        }
      }
    };

    fetchNews();
  }, []);

  return (
    <ArticlesContext.Provider
      value={{ isLoading, setIsLoading, countries, news, setNews }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
