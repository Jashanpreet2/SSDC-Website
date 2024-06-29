import { useRouter } from "next/router";
import NewsCard from "./NewsCard";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const maxContentNum = 3;

export default function NewsList({ news }) {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);

    const totalPage = Math.ceil(news.length / maxContentNum);

    useEffect(() => {
        const page = parseInt(router.query.page) || 1;
        if (page > totalPage || page < 1 || isNaN(page)) {
            router.push('/news');
        }
        let startPage = Math.max(page - 1, 1);

        if (startPage > totalPage - 2) {
            startPage = totalPage - 2;
        }
        setCurrentPage(page);
        setStart(startPage);

    }, [router.query.page]);


    const handlePageChange = (pageNum) => {
        console.log("hi");
        router.push(`/news/?page=${pageNum}`, undefined, {shallow: true});
    }

    const getData = () => {
        const startIndex = (currentPage - 1) * maxContentNum;
        const endPosition = startIndex + maxContentNum;
        return news.slice(startIndex, endPosition);
    }

  return (
    <div className='d-flex flex-column mt-4 align-items-center pb-4'>
        {getData().map((content) => (
            <NewsCard {...content} />
        ))}

        <Pagination startPage={start} total={totalPage} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  )
}
