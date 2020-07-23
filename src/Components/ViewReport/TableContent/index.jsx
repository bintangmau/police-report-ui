// MODULE
import React , { useState } from 'react'
import { useHistory } from 'react-router-dom'

// MATERIAL UI MODULE
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { Button } from '@material-ui/core';


// STYLE
import './style.css'

const useStyles1 = makeStyles(theme => ({
    root: {
      boxShadow: 'none',
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
}));

const useStyles2 = makeStyles(theme => ({
  table: {
    minWidth: 500,
  },
  tableRow : {
    "&:hover": {
      backgroundColor: "#fafafa !important",
      borderLeft: '8px solid #f16821',
      '& .row-index': {
        marginLeft: '-4px'
      }
    },
    cursor : "pointer"
  },
  paper: {
    borderRadius: 4,
    position: 'absolute',
    width: 500,
    height : "auto",
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
  },
}));

function TableContent (props) {
    
    const history = useHistory()

    const classes = useStyles2();

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data,setData] = useState([])
    const [page, setPage] = useState(0);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredData().length - page * rowsPerPage);

    const {
        dataReport,
        getDataReport,
        offset,
        setOffset
    } = props


    let showDate = (dateParams) => {
      let date = new Date(dateParams).getDate() 
      let monthNumber = new Date(dateParams).getMonth()
      let month = ''
      let year = new Date(dateParams).getFullYear()
      switch (monthNumber) {
      case 0 :
          month = 'Januari'
          break;
      case 1 :
          month = 'Februari'
          break;
      case 2 :
          month = 'Maret'
          break;
      case 3 :
          month = 'April'
          break;
      case 4 :
          month = 'mei'
          break;
      case 5 :
          month = 'Juni'
          break;
      case 6 :
          month = 'Juli'
          break;
      case 7 :
          month = 'Agustus'
          break;
      case 8 :
          month = 'September'
          break;
      case 9 :
          month = 'Oktober'
          break;
      case 10 :
          month = 'November'
          break;
      case 11 :
          month = 'Desember'
          break;
      default:
          month = 'hehe'
          break;
      }
      return date + ' ' + month  + ' ' + year
    }

    let showHour = (hourParams) => {

    let hour = new Date(hourParams).getHours()
    let minutes = new Date(hourParams).getMinutes()

    return (hour > 9 ? hour : "0" + hour ) + ":" + (minutes > 9 ? minutes : "0" + minutes)

    }

    function getStatuKehadiran () {
        return ""
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(+event.target.value, 10));
        setPage(0);
    };

    const handleStatusReport = (status) => {
      if(status === "0") {
        return <span style={{ fontSize: "10px" }}>Menunggu Disposisi Dari Wakasat</span>
      } else if(status === "1") {
        return <span style={{ fontSize: "10px" }}>Menunggu Disposisi Dari Kanit</span>
      } else if(status === "2") {
        return <span style={{ fontSize: "10px" }}>Menunggu Disposisi Dari Kasubnit</span>
      } else if(status === "3") {
        return <span style={{ fontSize: "10px" }}>Sudah Diterima Penyidik</span>
      }
    }

    function TablePaginationActions(props) {
        const classes = useStyles1();
        const theme = useTheme();
        const { count, page, rowsPerPage, onChangePage } = props;
      
        const handleFirstPageButtonClick = event => {
          onChangePage(event, 0);
        };
      
        const handleBackButtonClick = event => {
            onChangePage(event, page - 1);
            let offsetV = offset - 5
            getDataReport(offsetV)
            setOffset(offset - 5)
        };
      
        const handleNextButtonClick = event => {
            onChangePage(event, page + 1);
            let offsetV = offset + 5
            getDataReport(offsetV)
            setOffset(offset + 5)
        };
      
        const handleLastPageButtonClick = event => {
          onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };
      
        return (
          <div className={classes.root}>
            <IconButton
              onClick={handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label="first page"
            >
              {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
              onClick={handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="next page"
            >
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
              onClick={handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="last page"
            >
              {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
          </div>
        );
    }

    function filteredData () {
        return data
    }

    return (
        <div className="table-content-45">
        <TableContainer component={Paper} style={{ boxShadow: 'none', marginBottom: '30px' }}>
        <Table className={classes.table} style={{ boxShadow: 'none' }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell >
                <div className="guest-table-per-col-title-1">
                  NOMOR
                </div>
              </TableCell>
              <TableCell >
                <div className="guest-table-per-col-title-1">
                  Dilaporkan
                </div>
              </TableCell>
              <TableCell >
                <div className="guest-table-per-col-title-1">
                  No Laporan
                </div>
              </TableCell>
              <TableCell >
                <div className="guest-table-per-col-title-1">
                  Unit
                </div>
              </TableCell>
              <TableCell >
                <div className="guest-table-per-col-title-1">
                  Subnit
                </div>
              </TableCell>
              <TableCell >
                <div className="guest-table-per-col-title-1">
                  Penyidik
                </div>
              </TableCell>
              <TableCell >
                <div className="guest-table-per-col-title-1">
                  Status
                </div>
              </TableCell>
              <TableCell >
                <div className="guest-table-per-col-title-1">
                  Detail
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            // (rowsPerPage > 0
            //   ? filteredData().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            //   :  filteredData()
            // ).map((row,index) =>  (
        //    dataReport.map((row,index) =>  (
            // (rowsPerPage > 0
            //   ? dataReport.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            //   :  dataReport
            // ).map((row,index) =>  (
               dataReport.map((row,index) =>  (
              <TableRow key={index} className={classes.tableRow} >
                <TableCell>
                  <div className="guest-table-per-col-1 row-index">
                    {index + 1}
                  </div>
                </TableCell>
                {/* <TableCell component="th" scope="row"> */}
                <TableCell >
                  <div className="guest-table-per-col-1" style={{color : "#444444"}}>
                    {row.waktuDilaporkan ? showDate(row.waktuDilaporkan) : "-"}
                  </div>
                </TableCell>
                <TableCell >
                  <div className="guest-table-per-col-1" style={{color : "#444444"}}>
                    {row.nomorLaporanPolisi ? row.nomorLaporanPolisi : "-"}
                  </div>
                </TableCell>
                <TableCell >
                  <div className="guest-table-per-col-1" style={{color : "#444444"}}>
                    {row.unit !== "-" ? "UNIT " + row.unit : "-" }
                  </div>
                </TableCell>
                <TableCell >
                  <div className="guest-table-per-col-1" style={{color : "#444444"}}>
                    {row.subnit !== "-" ? "SUBNIT " + row.subnit : "-" }
                  </div>
                </TableCell>
                <TableCell >
                  <div className="guest-table-per-col-1" style={{color : "#444444"}}>
                    {row.penyidik ? row.penyidik.length + " orang" : "-" }
                  </div>
                </TableCell>
                <TableCell >
                  <div className="guest-table-per-col-1" style={{color : "#444444"}}>
                    {handleStatusReport(row.statusReport)}
                  </div>
                </TableCell>
                <TableCell >
                  <div className="guest-table-per-col-1" style={{color : "#444444"}}>
                    <button onClick={() => history.push(`/detail/a/${row.id}`)}>Details</button>
                  </div>
                </TableCell>
                {/* {
                  props.selectedTab === 2 ?
                  <TableCell >
                    <div className="guest-table-per-col-1">
                      {showDate(row.waktuCheckIn)}
                    </div>
                  </TableCell> : <></>
                }
                {
                  props.selectedTab === 2 ?
                  <TableCell >
                    <div className="guest-table-per-col-1">
                      {showHour(row.waktuCheckIn)}
                    </div>
                  </TableCell> : <></>
                } */}
                
                {/* <TableCell >
                  <div className="guest-table-per-col-1">
                    {getStatuKehadiran(row.statusKehadiran, row.statusDibuat) }
                  </div>
                </TableCell>
                <TableCell >
                  <button 
                    className="button-for-detail-guest"
                    style={{cursor : "pointer"}}
                    // onClick={e=>history.push(`/detail/${row._id}`)}
                  >
                    Detail
                  </button>
                </TableCell>
   */}
              </TableRow>
            ))}
  
            {emptyRows > 0 && (
              <TableRow style={{ display: 'none' }}>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter >
            <TableRow >
              <TablePagination
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} dari ${count}`}
                labelRowsPerPage='Tampilan per halaman:'
                rowsPerPageOptions={[6, 10, 25, { label: 'All', value: -1 }]}
                colSpan={9}
                count={dataReport.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              //   classes={a}
                style={{textAlign : "right"}}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
        </div>
    )

}

export default TableContent