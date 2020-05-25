<?php

namespace App\Order\Domain;

interface OrderRepository
{
    /**
     * Get an order by its id
     *
     * @param string $id
     *
     * @return Order
     */
    public function get($id);

    /**
     * Get all of the order lists
     *
     * @return Orders[]
     */
    public function orderList();
}