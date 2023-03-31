import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import NewsList from "./NewsList";
import { NewsType, ArticlesContext } from "../context/ArticlesContext";

export const Country = () => {
  const [getCountry, setGetCountry] = useState<NewsType>({
    status: "",
    articles: [],
    totalResults: 0,
  });
  const { isLoading, setIsLoading } = useContext(ArticlesContext);
  const { country } = useParams();

  useEffect(() => {
    const fetchCountry = async (): Promise<NewsType | undefined> => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_NEWSAPI_LINK
          }/top-headlines?country=${country}&apiKey=${
            import.meta.env.VITE_REACT_API_KEY
          }`
        );
        const data = await response.json();
        setIsLoading(false);
        setGetCountry(data);
        return data;
      } catch (error) {
        if (error instanceof Error) {
          setIsLoading(false);
          console.log(error.message);
          throw new Error("sth went wrong to fetch data");
        }
      }
    };
    fetchCountry();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div>
      <div className="container">
        <NewsList data={getCountry} />
      </div>
    </div>
  );
};
