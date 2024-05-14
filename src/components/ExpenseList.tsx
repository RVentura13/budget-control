import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useMemo } from 'react';
import { useBudget } from '../hooks/useBudget';
import { ExpendDetail } from './ExpendDetail';

export const ExpenseList = () => {
	const { state } = useBudget();

	const filteredExpenses = state.currentCategory
		? state.expenses.filter((expense) => expense.category === state.currentCategory)
		: state.expenses;
	const isEmpty = useMemo(() => filteredExpenses.length === 0, [state.expenses]);

	return (
		<div className='mt-10 bg-white shadow-lg rounded-lg p-10'>
			{isEmpty ? (
				<p className='text-gray-600 text-2xl font-bold'>No hay gastos</p>
			) : (
				<>
					<p className='text-gray-600 text-2xl font-bold my-5'>Listado de gastos</p>
					{filteredExpenses.map((expense) => (
						<ExpendDetail
							key={expense.id}
							expense={expense}
						/>
					))}
					<div className='flex justify-between items-center'>
						<FaArrowLeft
							className='animate-pulse'
							size={20}
						/>
						<p className='text-center text-gray-600 p-2'>Desliza para editar o eliminar</p>
						<FaArrowRight
							className='animate-pulse'
							size={20}
						/>
					</div>
				</>
			)}
		</div>
	);
};
