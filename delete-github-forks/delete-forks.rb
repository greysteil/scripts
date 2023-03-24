# List all forks on my GitHub account and delete them


require 'octokit'; nil # Silence a Faraday notice

puts "What is your GitHub Handle?"
GITHUB_HANDLE = gets.chomp

puts "What is your GitHub PAT?"
GITHUB_API_TOKEN = gets.chomp

puts "Dry run? (Any input other than 'no' will trigger a dry run.)"
DRY_RUN = gets.chomp.downcase != "no"

client = Octokit::Client.new(access_token: GITHUB_API_TOKEN)
client.auto_paginate = true

puts "\nOK, the following repos #{ DRY_RUN ? 'would be' : 'were' } deleted:\n"

client.repos(GITHUB_HANDLE).each do |repo|
    next unless repo.fork
    next unless repo.owner.login = GITHUB_HANDLE

    client.delete_repository(repo.id) unless DRY_RUN
    puts repo.full_name
end

puts "\nAll done!"