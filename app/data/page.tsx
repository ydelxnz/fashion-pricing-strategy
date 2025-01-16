'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Download, Trash2, RefreshCw } from 'lucide-react'

export default function DataManagementPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const dummyData = [
    { id: 1, date: '2023-01-01', product: 'T-shirt', sales: 100, revenue: 2000 },
    { id: 2, date: '2023-01-02', product: 'Jeans', sales: 50, revenue: 3000 },
    { id: 3, date: '2023-01-03', product: 'Dress', sales: 75, revenue: 3750 },
    { id: 4, date: '2023-01-04', product: 'Shoes', sales: 30, revenue: 2400 },
    { id: 5, date: '2023-01-05', product: 'Hat', sales: 20, revenue: 400 },
  ]

  const filteredData = dummyData.filter(item =>
    Object.values(item).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">数据管理</h1>
      <Card>
        <CardHeader>
          <CardTitle>销售数据</CardTitle>
          <CardDescription>管理和维护销售数据</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <Button><Upload className="mr-2 h-4 w-4" /> 导入</Button>
              <Button variant="outline"><Download className="mr-2 h-4 w-4" /> 导出</Button>
            </div>
            <div className="flex space-x-2">
              <Input
                type="search"
                placeholder="搜索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline"><RefreshCw className="mr-2 h-4 w-4" /> 刷新</Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>日期</TableHead>
                <TableHead>产品</TableHead>
                <TableHead>销量</TableHead>
                <TableHead>收入</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.sales}</TableCell>
                  <TableCell>{item.revenue}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

