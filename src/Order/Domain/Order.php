<?php

namespace App\Order\Domain;

class Order
{
    /**
     * @var Id
     */
    private $id;

    /**
     * @var date
     */
    private $date;

    /**
     * @var string
     */
    private $customer;

    /**
     * @var string
     */
    private $address1;

    /**
     * @var string
     */
    private $city;

    /**
     * @var string
     */
    private $postcode;

    /**
     * @var string
     */
    private $country;

    /**
     * @var int
     */
    private $amount;

    /**
     * @var string
     */
    private $status;

    /**
     * @var bool
     */
    private $deleted;

    /**
     * @var date
     */
    private $last_modified;

    private function __construct($date, $customer, $address1, $city, $postcode, $country, $amount, $status, $deleted, $last_modified)
    {
        $this->date = $date;
        $this->customer = $customer;
        $this->address1 = $address1;
        $this->city = $city;
        $this->psotcode = $postcode;
        $this->country = $country;
        $this->amount = $amount;
        $this->status = $status;
        $this->deleted = $deleted;
        $this->last_modified = $last_modified;
    }

    /**
     * Get order date
     * @return $order date
     */
    public function getDate()
    {
        // to do
        return $this->date;
    }

    /**
     * Set order's date
     * @param $date
     */
    private function setDate($date){
        $this->date = $date;
    }

    /**
     * Get order customer
     * @return $order customer
     */
    public function getCustomer()
    {
        // to do
        return $this->customer;
    }

    /**
     * Set order's customer
     * @param $customer
     */
    private function setCustomer($customer){
        $this->customer = $customer;
    }
    /**
     * Get order address1
     * @return $order address1
     */
    public function getAddress1()
    {
        // to do
        return $this->address1;
    }

    /**
     * Set order's address1
     * @param $address1
     */
    private function setAddress1($address1){
        $this->address1 = $address1;
    }
    /**
     * Get order city
     * @return $order city
     */
    public function getCity()
    {
        // to do
        return $this->city;
    }

    /**
     * Set order's city
     * @param $city
     */
    private function setCity($city){
        $this->city = $city;
    }

    /**
     * Get order psotcode
     * @return $order psotcode
     */
    public function getPostcode()
    {
        // to do
        return $this->psotcode;
    }

    /**
     * Set order's psotcode
     * @param $psotcode
     */
    private function setPostcode($psotcode){
        $this->psotcode = $psotcode;
    }

    /**
     * Get order country
     * @return $order country
     */
    public function getCountry()
    {
        // to do
        return $this->country;
    }

    /**
     * Set order's country
     * @param $country
     */
    private function setCountry($country){
        $this->country = $country;
    }

    /**
     * Get order amount
     * @return $order amount
     */
    public function getAmount()
    {
        // to do
        return $this->amount;
    }

    /**
     * Set order's amount
     * @param $amount
     */
    private function setAmount($amount){
        $this->amount = $amount;
    }


    /**
     * Get order status
     * @return $order status
     */
    public function getStatus()
    {
        // to do
        return $this->status;
    }

    /**
     * Set order's status
     * @param $status
     */
    private function setStatus($status){
        $this->status = $status;
    }

    /**
     * Get order deleted
     * @return $order deleted
     */
    public function getDeleted()
    {
        // to do
        return $this->deleted;
    }

    /**
     * Set order's deleted
     * @param $deleted
     */
    private function setDeleted($deleted){
        $this->deleted = $deleted;
    }

    /**
     * Get order last_modified
     * @return $order last_modified
     */
    public function getLastModified()
    {
        // to do
        return $this->last_modified;
    }

    /**
     * Set order's last_modified
     * @param $last_modified
     */
    private function setLastModified($last_modified){
        $this->last_modified = $last_modified;
    }

}
