import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap"
import { Layout } from "../../../hoc/Layout"
import { Text } from "../Text/Text"
import { getCountOfPages } from './helpers';
import classes from "./Pagination.module.css"



export const PaginationItem = ({ onClick, pageNumber, count }) => {

    const [currentPage, setCurrentPage] = useState(pageNumber);
    const [itemCount, setItemCount] = useState(count)

    useEffect(() => {
        setItemCount(getCountOfPages(count));
    }, [count])



    const onClickButtonHandler = (value) => () => {
        onClick(value);
        setCurrentPage(value + currentPage)
    }

    return (
        <Layout styles={classes.PaginationItem}>
            <Button disabled={!!(!(currentPage - 1) > 0)} onClick={onClickButtonHandler(-1)} variant='default' style={{ backgroundColor: '#ccc' }}><Text text='< Prev' /></Button>
            <Button disabled variant='default' style={{ backgroundColor: 'coral', opacity: '1' }}><Text text={`Page ${currentPage}  of ${itemCount}`} /></Button>
            <Button disabled={!!((currentPage + 1) > itemCount)} onClick={onClickButtonHandler(+1)} variant='default' style={{ backgroundColor: '#ccc' }}><Text text='Next >' /></Button>
        </Layout>
    )
}

PaginationItem.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
}