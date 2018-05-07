<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PortfolioInquiry extends Mailable
{
    use Queueable, SerializesModels;

    protected $contents;

    /**
     * Create a new message instance.
     *
     * @param $input
     *
     * @return void
     */
    public function __construct($input)
    {
        $this->contents = $input;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from([
            'address' => $this->contents['email'],
            'name' => $this->contents['name'],
        ])
        ->subject('Portfolio Inquiry')
        ->markdown('mail.markdown.portfolio-inquiry', $this->contents);
    }
}
