import { Pagination } from "react-bootstrap"


export const PaginationItem = () => {

    return (
        <Pagination style={{ justifyContent: 'flex-end', marginRight: '10px' }}>

            <Pagination.Prev  />
            <Pagination.Item active>Page {1} to {10}</Pagination.Item>
            <Pagination.Next />

        </Pagination >
    )
}