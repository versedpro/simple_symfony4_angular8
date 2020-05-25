<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Order\Infrastructure\PDO\HibernateOrderRepository;

class OrderApiController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        return $this->render('activity/index.html.twig');
    }

    /**
     * @Route("/order/get", name="order_get")
     */
    public function getOrder()
    {
        // return $this->render('order_api/index.html.twig', [
        //     'controller_name' => 'OrderApiController',
        // ]);

        // Assume that  I use PDO provided
        $pdo = (object) null;
        $orderRepository = new HibernateOrderRepository($pdo);
        return $orderRepository->orderList();
    }
}
