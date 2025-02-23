function BudgetTracker() {
    const budgetData = {
        income: 5000,
        expenses: 3000,
        savingsGoal: 10000,
        currentSavings: 7000
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm" data-name="budget-tracker">
            <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between mb-1">
                        <span>Income</span>
                        <span>${budgetData.income}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span>Expenses</span>
                        <span>${budgetData.expenses}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-red-500 h-2 rounded-full" 
                            style={{width: `${(budgetData.expenses/budgetData.income) * 100}%`}}
                        ></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span>Savings Goal</span>
                        <span>${budgetData.currentSavings}/${budgetData.savingsGoal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{width: `${(budgetData.currentSavings/budgetData.savingsGoal) * 100}%`}}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
