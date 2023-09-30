import {
    Box, Collapse, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography,
    Checkbox as MuiCheckbox, FormControl, Select, MenuItem, TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

import {
    AddBox, Category, TripOrigin, DragIndicator, EditNote, ArrowBackIosNew, ArrowForwardIos, KeyboardArrowUp,
    KeyboardArrowDown
} from "@mui/icons-material";
import axios from "axios";
import { useEffect, } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { User, Pagination, setUsers, setPagination, userSelector, UserStore } from '../../features/users/userSlice';


interface UserApiParams {
    page: number
    limit: number
    orderBy?: 'id' | 'first_name' | 'email_id'
    sortedBy?: 'asc' | 'desc'
}



export default function Users() {

    const dispatch = useAppDispatch();
    const UserStore = useAppSelector(userSelector);

    const { users, pagination } = UserStore

    useEffect(() => {

        const newParams = {
            page: pagination.current_page,
            limit: pagination.per_page
        }

        getUsersAndSetState(newParams)
            .then((res: any) => {

                const newPagination = {
                    to: res.data.to,
                    total: res.data.total,
                    per_page: res.data.per_page,
                    current_page: res.data.current_page,
                    last_page: res.data.last_page,
                }
                const users = res.data.data

                dispatch(setPagination(newPagination))
                dispatch(setUsers(users))
            })

        console.log(users)

    }, []);


    function getUsersAndSetState(params: UserApiParams) {
        return new Promise((resolve, reject) => {
            const url = 'https://tmsv4.stagingcp.co/api/machine-test'
            axios({
                method: 'get',
                url: url,
                params: params
            })
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    function handlePaginationChange(newPagination: UserApiParams) {
        getUsersAndSetState(newPagination)
            .then((res: any) => {

                const newPagination = {
                    to: res.data.to,
                    total: res.data.total,
                    per_page: res.data.per_page,
                    current_page: res.data.current_page,
                    last_page: res.data.last_page,
                }
                const users = res.data.data

                dispatch(setPagination(newPagination))
                dispatch(setUsers(users))
            })
    }

    function handlePerPageChange(value: number) {
        dispatch(setPagination({ ...pagination, per_page: value, current_page:1 }))
        let newParams: UserApiParams = {
            page: 1,
            limit: value
        }
        if (pagination.sortedBy) {
            newParams['sortedBy'] = pagination.sortedBy
        }
        if (pagination.orderBy) {
            newParams['orderBy'] = pagination.orderBy
        }

        handlePaginationChange(newParams)
    }

    function handleNextPageClick(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch(setPagination({ ...pagination, current_page: pagination.current_page + 1 }))
        let newParams: UserApiParams = {
            page: pagination.current_page + 1,
            limit: pagination.per_page
        }
        if (pagination.sortedBy) {
            newParams['sortedBy'] = pagination.sortedBy
        }
        if (pagination.orderBy) {
            newParams['orderBy'] = pagination.orderBy
        }

        handlePaginationChange(newParams)
    }

    function handlePreviousPageClick(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch(setPagination({ ...pagination, current_page: pagination.current_page - 1 }))
        let newParams: UserApiParams = {
            page: pagination.current_page - 1,
            limit: pagination.per_page
        }
        if (pagination.sortedBy) {
            newParams['sortedBy'] = pagination.sortedBy
        }
        if (pagination.orderBy) {
            newParams['orderBy'] = pagination.orderBy
        }

        handlePaginationChange(newParams)
    }

    function handleSortAndOrder(sortBy:'asc' | 'desc', orderBy:'id' | 'first_name' | 'email_id'){
        dispatch(setPagination({ ...pagination, current_page:1, orderBy:'id', sortedBy:sortBy }))
        let newParams: UserApiParams = {
            page: 1,
            limit: pagination.per_page,
            sortedBy: sortBy,
            orderBy: orderBy,
        }
        handlePaginationChange(newParams)
    };



    return (
        <>
            <Table sx={{ border: '1px solid #DDE2E4', borderRadius: '8px' }}>
                <TableHead>
                    <TableRow sx={{
                        backgroundColor: '#F7F9FF',
                        'th': {
                            fontSize: 13, color: '#5F5F5F', fontWeight: 500, padding: '10px 0px', textAlign: 'center',
                        }
                    }}>
                        <TableCell>
                            <Stack direction='row' alignItems='center' gap='5px' sx={{ display: 'inline-flex' }}>
                                <Typography sx={{ fontSize: 13, color: '#5F5F5F', fontWeight: 500, }}>ID</Typography>
                                <Box role='button' sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <KeyboardArrowUp onClick={()=>{handleSortAndOrder('asc','id')}} />
                                    <KeyboardArrowDown sx={{ mt: '-8px' }} onClick={()=>{handleSortAndOrder('desc','id')}} />
                                </Box>
                            </Stack>

                        </TableCell>

                        <TableCell>
                            <Stack direction='row' alignItems='center' gap='5px' sx={{ display: 'inline-flex' }}>
                                <Typography sx={{ fontSize: 13, color: '#5F5F5F', fontWeight: 500, }}>First Name</Typography>
                                <Box role='button' sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <KeyboardArrowUp onClick={()=>{handleSortAndOrder('asc','first_name')}} />
                                    <KeyboardArrowDown sx={{ mt: '-8px' }} onClick={()=>{handleSortAndOrder('desc','first_name')}} />
                                </Box>
                            </Stack>
                        </TableCell>
                        <TableCell align='center'>Middle Name</TableCell>
                        <TableCell align='center'>Last Name</TableCell>
                        <TableCell>
                            <Stack direction='row' alignItems='center' gap='5px' sx={{ display: 'inline-flex' }}>
                                <Typography sx={{ fontSize: 13, color: '#5F5F5F', fontWeight: 500, }}>Email</Typography>
                                <Box role='button' sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <KeyboardArrowUp onClick={()=>{handleSortAndOrder('asc','email_id')}} />
                                    <KeyboardArrowDown sx={{ mt: '-8px' }} onClick={()=>{handleSortAndOrder('desc','email_id')}} />
                                </Box>
                            </Stack>
                        </TableCell>
                        <TableCell align='center'>Mobile</TableCell>
                        <TableCell align='center'>Gender</TableCell>
                        <TableCell align='center'>Address</TableCell>
                        <TableCell align='center'>Languages</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.length === 0 || users === null ? (
                        <TableRow>
                            <TableCell colSpan={5} sx={{
                                width: '100%', padding: '100px 0', textAlign: 'center',
                                fontSize: 15, fontWeight: 400, color: '#A2A2A2'
                            }}>
                                No data available
                            </TableCell>
                        </TableRow>
                    ) : (
                        users.map((item, index) => (
                            <TableRow
                                draggable

                                key={item.id}
                                sx={{
                                    'td': { fontSize: 14, padding: '10px 0px', color: '#0E0E0E', fontWeight: 500, textAlign: 'center', }
                                }}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.first_name}</TableCell>
                                <TableCell>{item.middle_name}</TableCell>
                                <TableCell>{item.last_name}</TableCell>
                                <TableCell>{item.email_id}</TableCell>
                                <TableCell>{item.mobile_no}</TableCell>
                                <TableCell>{item.gender}</TableCell>
                                <TableCell>{item.address}</TableCell>
                                <TableCell>{item.languages_known}</TableCell>
                            </TableRow>

                        ))
                    )}
                </TableBody>

            </Table>
            {/* pagination  */}
            <Stack direction='row' justifyContent='space-between' py='6px' pt='15px' alignItems='center'>
                <Stack direction='row' gap='5px' alignItems='center'>
                    <FormControl sx={{ '.MuiSelect-select ': { padding: '5px' } }}>
                        <Select
                            value={pagination.per_page}
                            onChange={(event) => { handlePerPageChange(parseInt(event.target.value)) }}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography sx={{ color: '#84919A', fontSize: 13, fontWeight: 400 }}>Pages</Typography>
                </Stack>
                <Stack direction='row' alignItems='center' gap='3px'>
                    <IconButton sx={{ p: '3px' }} onClick={handlePreviousPageClick} disabled={pagination.current_page <= 1}>
                        <ArrowBackIosNew />
                    </IconButton>
                    <Stack direction='row' alignItems='center' gap='8px'>
                        <Typography sx={{ color: '#84919A', fontSize: 13, fontWeight: 400 }}>Page {pagination.current_page} of {pagination.last_page}</Typography>
                    </Stack>
                    <IconButton sx={{ p: '3px' }} onClick={handleNextPageClick} disabled={pagination.current_page === pagination.last_page}>
                        <ArrowForwardIos />
                    </IconButton>
                </Stack>
            </Stack>
        </>
    )
}
