export default function({ children }: 
    {children: React.ReactNode})
    {
    return(<div>
        <div className="P-4 border-b text-center">
            20% off for the next 3 days!
        </div>
        {children}
        </div>
    )
}