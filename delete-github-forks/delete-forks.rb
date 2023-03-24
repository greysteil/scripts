# List all the forks on a GitHub account and delete them

require 'octokit'; nil # Silence a Faraday notice

puts "What GitHub handle do you want to list forks on?"
GITHUB_HANDLE = gets.chomp

puts "What is your GitHub PAT?"
GITHUB_API_TOKEN = gets.chomp

puts "Delete the forks? (Any input other than 'yes' will just do a dry run.)"
DRY_RUN = gets.chomp.downcase != "yes"

puts "\nOK, the following repos #{ DRY_RUN ? 'would be' : 'were' } deleted:\n"

client = Octokit::Client.new(access_token: GITHUB_API_TOKEN)

# In an ideal world we would lazy-paginate through the repositories, but since
# the list is generally small fetching the whole lot is probably fine.
client.auto_paginate = true
client.repos(GITHUB_HANDLE).each do |repo|
    next unless repo.fork
    next unless repo.owner.login = GITHUB_HANDLE

    client.delete_repository(repo.id) unless DRY_RUN
    puts repo.full_name
end

puts "\nAll done!"