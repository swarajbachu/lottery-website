"use client"

import { useState } from "react"
import DatePicker from "react-datepicker"

import { Columns, data } from "../column"
import { DataTable } from "./table"

function FetchTable() {
  const [startDate, setStartDate] = useState(new Date())
  //   const [endDate, setEndDate] = useState(new Date())

  const filteredData = data.filter((row) => {
    const rowDate = new Date(row.date)
    if (
      startDate
      // && endDate
    ) {
      return rowDate.getDate() === startDate.getDate()
      //   && rowDate <= endDate
    } else {
      return true
    }
  })

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
      />
      <DataTable columns={Columns} data={filteredData} />
    </div>
  )
}

export default FetchTable
