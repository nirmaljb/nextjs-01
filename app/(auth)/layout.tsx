import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'User authentication page'
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <div className="text-center my-2 py-2">Signin banner, 20% off</div>
            {children}
        </div>
    )
}