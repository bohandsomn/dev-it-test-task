import { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IUseState } from '@/types'
import { HotToastNotificationService } from '../services'
import { INotificationContext } from './types'

export const useNotificationState: IUseState<INotificationContext> =
    create<INotificationContext>()(
        devtools(() => new HotToastNotificationService(), {
            name: 'notification',
        }),
    )

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
            <Toaster position="bottom-right" />
        </>
    )
}
