<?php

namespace App\Order\Infrastructure\PDO;

use App\Order\Domain\Order;
use App\Order\Domain\OrderRepository as BaseOrderRepository;
use PDO;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class HibernateOrderRepository implements BaseOrderRepository
{
    /**
     * @var PDO
     */
    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     * Get an order by its id
     *
     * @param int $id
     * @return Order
     */
    public function get($id)
    {
        // To get an order from database

        return new Order(
            $id,
            $date,
            $cutomer,
            $address1,
            $city,
            $postcode,
            $country,
            $amount,
            $status,
            $deleted,
            $last_modified
        );
    }

    /**
     * Get all of the order lists
     *
     * @return Orders[]
     */
    public function orderList()
    {
        $orders = [];
        // To get all of the order lists from database
        // return $orders;

        // Assume that get orders from database
        $ordersDirectories = __DIR__.'/orders.json';
        $ordersJson = file_get_contents($ordersDirectories);
        $orders = json_decode($ordersJson, true);
        
        $response = new Response(json_encode($orders));
        return $response;
    }
}
