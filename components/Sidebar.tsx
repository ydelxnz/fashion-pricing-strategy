'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart2, Database, DollarSign, Filter, LineChart, Users, Menu, X, Bell, User, Settings, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const navItems = [
  { name: '数据筛选', href: '/filter', icon: Filter },
  { name: '图表展示', href: '/charts', icon: BarChart2 },
  { name: '销售预测', href: '/forecast', icon: LineChart },
  { name: '促销定价', href: '/pricing', icon: DollarSign },
  { name: '数据管理', href: '/data', icon: Database },
  { name: '用户管理', href: '/users', icon: Users },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()
  const [unreadMessages, setUnreadMessages] = useState(3) // 模拟未读消息数量

  return (
    <aside className={cn(
      "bg-gray-800 text-white transition-all duration-300 ease-in-out flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex-1">
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && <h1 className="text-xl font-bold">促销定价策略</h1>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "展开侧边栏" : "折叠侧边栏"}
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>
        <nav className="space-y-2 p-2">
          {navItems.map((item) => (
            <TooltipProvider key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200",
                      pathname === item.href
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {!isCollapsed && <span>{item.name}</span>}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
      </div>
      <div className="p-2 border-t border-gray-700 flex flex-col space-y-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="relative w-full justify-start px-2 py-1.5 h-auto">
              <div className="w-5 flex justify-center">
                <Bell className="h-5 w-5" />
              </div>
              {!isCollapsed && <span className="ml-2">消息通知</span>}
              {unreadMessages > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {unreadMessages}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align={isCollapsed ? "center" : "start"}>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">通知</h4>
                <p className="text-sm text-muted-foreground">
                  您有 {unreadMessages} 条未读消息
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm">新的销售数据可用</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm">促销活动 "夏季特惠" 已开始</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <p className="text-sm">库存预警：T恤库存不足</p>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">全部标记为已读</Button>
                <Button variant="outline" size="sm">清空通知</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start px-2 py-1.5 h-auto">
              <div className="w-5 flex justify-center">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              {!isCollapsed && <span className="ml-2 text-sm text-gray-300">用户名</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align={isCollapsed ? "center" : "start"}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>个人中心</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>设置</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>退出登录</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  )
}

