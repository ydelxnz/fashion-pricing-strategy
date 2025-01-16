import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// 定义用户状态接口
interface UserState {
  username: string
  email: string
  isLoggedIn: boolean
  login: (username: string, email: string) => void
  logout: () => void
}

// 创建持久化的用户store
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: '',
      email: '',
      isLoggedIn: false,
      login: (username, email) => set({ 
        username, 
        email, 
        isLoggedIn: true 
      }),
      logout: () => set({ 
        username: '', 
        email: '', 
        isLoggedIn: false 
      }),
    }),
    {
      name: 'user-storage', // 本地存储的key
      // 可以选择只持久化部分状态
      partialize: (state) => ({
        username: state.username,
        email: state.email
      })
    }
  )
)

// 定义价格策略状态
interface PricingState {
  discountPercentage: number
  updateDiscountPercentage: (percentage: number) => void
}

export const usePricingStore = create<PricingState>()((set) => ({
  discountPercentage: 10,
  updateDiscountPercentage: (percentage) => set({ discountPercentage: percentage })
}))
